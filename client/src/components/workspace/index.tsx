import { useAppContext } from "@/context/AppContext"
import useResponsive from "@/hooks/useResponsive"
import { ACTIVITY_STATE } from "@/types/app"
import EditorComponent from "../editor/EditorComponent" // Ensure this import is correct

function WorkSpace() {
    const { viewHeight } = useResponsive()
    const { activityState } = useAppContext()

    return (
        <div
            className="absolute left-0 top-0 w-full max-w-full flex-grow overflow-x-hidden md:static"
            style={{ height: viewHeight }}
        >
            {activityState === ACTIVITY_STATE.DRAWING ? (
                // Remove the DrawingEditor component and replace it with another component if needed
                // For now, just render the EditorComponent
                <EditorComponent />
            ) : (
                <EditorComponent />
            )}
        </div>
    )
}

export default WorkSpace
