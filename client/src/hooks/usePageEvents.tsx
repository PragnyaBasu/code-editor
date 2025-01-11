import { useEffect } from "react"

function usePageEvents() {
    useEffect(() => {
        // Prevent user from leaving the page
        const beforeUnloadHandler = (e: any) => {
            const msg = "Changes you made may not be saved"
            return (e.returnValue = msg)
        }

        window.addEventListener("beforeunload", beforeUnloadHandler)

        return () => {
            window.removeEventListener("beforeunload", beforeUnloadHandler)
        }
    }, [])

    useEffect(() => {
        const handleWheel = (e: any) => {
            if (e.ctrlKey) {
                // Prevent default browser zoom behavior
                e.preventDefault()
                // Assuming font size adjustment logic is handled elsewhere now
            }
        }

        window.addEventListener("wheel", handleWheel, { passive: false })

        return () => {
            window.removeEventListener("wheel", handleWheel)
        }
    }, [])
}

export default usePageEvents
