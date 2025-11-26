export default function FormComponent({
	onSubmit,
}: {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-2 mt-10">
			<label htmlFor="name">Name</label>
			<input type="text" name="name" className="ring-2 ring-gray-300 p-1" />
			<label htmlFor="title">Title</label>
			<input type="text" name="title" className="ring-2 ring-gray-300 p-1" />
			<label htmlFor="description">Description</label>
			<input
				type="text"
				name="description"
				className="ring-2 ring-gray-300 p-1"
			/>
			<button
				type="submit"
				className="bg-blue-400 text-white p-2 cursor-pointer"
			>
				Submit
			</button>
		</form>
	);
}
