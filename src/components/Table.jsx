

const Table = ({ myName, anime }) => {
  return (
    <div class="flex-col container flex items-center justify-center mt-12 mx-auto">
  <div class="overflow-x-auto]">
    <div class=" inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-s font-medium text-black font-poppins uppercase">My Name</th>
              <th scope="col" class="px-6 py-3 text-left text-s font-medium text-black font-poppins uppercase">Favorite Anime</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-[#ff58e7]">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{myName}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{anime}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Table