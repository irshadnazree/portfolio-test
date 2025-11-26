import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <div>
      <form action='submit'>
        <input type='text' name='name' className='ring-2 ring-gray-300 p-1' />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 cursor-pointer'
        >
          Submit
        </button>
      </form>

      <div></div>
    </div>
  );
}
