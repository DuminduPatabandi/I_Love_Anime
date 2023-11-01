import { PencilIcon, TrashIcon, UserIcon } from "@heroicons/react/24/outline"
import Chart from './Chart'

const Table = ({ vote, setVote, editVote }) => {

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/vote/${id}`, {
      method: 'DELETE'
    }) .then(() => {
      const updatedVote = vote.filter((item) => item.id !== id);
      setVote(updatedVote);
    })
    .catch(error => console.error('Error deleting vote:', error));

  }

  const handleEdit = (id) => {
    editVote(id);
  };

  

  return (
    <>
    <div className="flex-col container flex items-center justify-center my-12 mx-auto">
    <div className="overflow-x-auto]">
    <div className=" inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs md:text-sm font-medium text-black font-poppins uppercase">My Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs md:text-sm font-medium text-black font-poppins uppercase">Favorite Anime</th>
              <th scope="col" className="px-6 py-3 text-left text-xs md:text-sm font-medium text-black font-poppins uppercase">Delete</th>
              <th scope="col" className="px-6 py-3 text-left text-xs md:text-sm font-medium text-black font-poppins uppercase">Edit</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            {vote.map((vote) => (
              <tr class="hover:bg-[#f7c0ee]" id={vote.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{vote.myName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{vote.anime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <TrashIcon onClick={() => handleDelete(vote.id)} className="w-6 h-6 mx-3 text-red-500" aria-hidden="true" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <PencilIcon onClick={() => handleEdit(vote.id)} className="w-6 h-6 mx-3 text-black" aria-hidden="true" />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
{vote && <Chart data={vote} />}
</>
  )
}

export default Table