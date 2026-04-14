
function PrimaryButton({ content, onClick }: { content: string, onClick: () => void }) {
    return (
        <button 
            className='bg-(--red) inline-block w-full p-3 
            rounded-full text-white font-medium cursor-pointer hover:bg-red-800'
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default PrimaryButton