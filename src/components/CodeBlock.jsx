import { useState } from 'react'
import { Copy, Check, Edit3, Play, Loader2 } from 'lucide-react'

const CodeBlock = ({ code, language = 'python', editable = true, executable = true }) => {
  const [copied, setCopied] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedCode, setEditedCode] = useState(code)
  const [isExecuting, setIsExecuting] = useState(false)
  const [output, setOutput] = useState(null)
  const [error, setError] = useState(null)

  const handleCopy = () => {
    const codeToCopy = isEditing ? editedCode : code
    navigator.clipboard.writeText(codeToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleEdit = () => {
    if (!isEditing) {
      setEditedCode(code)
    }
    setIsEditing(!isEditing)
    setOutput(null)
    setError(null)
  }

  const handleExecute = async () => {
    setIsExecuting(true)
    setOutput(null)
    setError(null)

    try {
      // Check if Pyodide is available
      if (typeof window.loadPyodide === 'undefined') {
        setError('Pyodide is not loaded yet. Please wait a moment and try again.')
        setIsExecuting(false)
        return
      }

      // Get or load Pyodide
      if (!window.pyodide) {
        setOutput('Loading Python environment...')
        window.pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
        })
        
        // Load common packages
        await window.pyodide.loadPackage(['numpy', 'pandas', 'matplotlib'])
        setOutput('Python environment loaded. Running code...')
      }

      const codeToRun = isEditing ? editedCode : code

      // Capture stdout
      await window.pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `)

      // Run the user's code
      await window.pyodide.runPythonAsync(codeToRun)

      // Get the output
      const result = await window.pyodide.runPythonAsync(`
sys.stdout.getvalue()
      `)

      setOutput(result || 'Code executed successfully (no output)')
    } catch (err) {
      setError(err.message || 'An error occurred while executing the code')
    } finally {
      setIsExecuting(false)
    }
  }

  const displayCode = isEditing ? editedCode : code

  return (
    <div className="relative group">
      {/* Action Buttons Bar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-700">
        <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
          {language} {isEditing && <span className="text-yellow-400">• Editing</span>}
        </span>
        <div className="flex items-center gap-2">
          {editable && (
            <button
              onClick={handleEdit}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                isEditing
                  ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              }`}
              title={isEditing ? 'Stop editing' : 'Edit code'}
            >
              <Edit3 className="w-3.5 h-3.5" />
              {isEditing ? 'Done' : 'Edit'}
            </button>
          )}
          {executable && (
            <button
              onClick={handleExecute}
              disabled={isExecuting}
              className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded text-xs font-medium text-white transition-colors"
              title="Execute Python code"
            >
              {isExecuting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  Execute
                </>
              )}
            </button>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-xs font-medium text-gray-200 transition-colors"
            title="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Display/Editor */}
      {isEditing ? (
        <textarea
          value={editedCode}
          onChange={(e) => setEditedCode(e.target.value)}
          className="w-full min-h-[200px] p-4 bg-gray-900 text-gray-100 font-mono text-sm rounded-b-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-y"
          spellCheck={false}
        />
      ) : (
        <pre className="!mt-0 !rounded-t-none !rounded-b-lg overflow-x-auto bg-gray-900 p-4">
          <code className="text-sm text-gray-100 font-mono">{displayCode}</code>
        </pre>
      )}

      {/* Output Section */}
      {output && (
        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
          <h4 className="text-sm font-semibold text-green-900 mb-2">Output:</h4>
          <pre className="text-sm text-green-800 whitespace-pre-wrap font-mono">{output}</pre>
        </div>
      )}

      {/* Error Section */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
          <h4 className="text-sm font-semibold text-red-900 mb-2">Error:</h4>
          <pre className="text-sm text-red-800 whitespace-pre-wrap font-mono">{error}</pre>
        </div>
      )}
    </div>
  )
}

export default CodeBlock
