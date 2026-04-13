
function PrimaryButton({ content }: { content: string}) {
    return (
        <button 
            className='bg-(--red) inline-block w-full p-3 
            rounded-full text-white font-medium cursor-pointer'
        >
            {content}
        </button>
    )
}

export default PrimaryButton