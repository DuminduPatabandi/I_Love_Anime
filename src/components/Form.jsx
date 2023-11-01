import { useState, useEffect } from "react";
import { logo } from "../assets";
import { FaceSmileIcon, UserIcon } from '@heroicons/react/24/outline'
import Table from "./Table";


const Form = () => {

  const [myName, setMyName] = useState('I');
  const [anime, setAnime] = useState('Naruto');
  const [vote, setVote] = useState(null);

  const fetchVoteData = async () => {
    try {
      const response = await fetch('http://localhost:8000/vote');
      const data = await response.json();
      setVote(data);
    } catch (error) {
      console.error('Error fetching vote data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const vote = { myName, anime }

      fetch('http://localhost:8000/vote', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(vote)
      }).then(() => fetchVoteData())

  }

  useEffect(() => {
    fetchVoteData();
  },[])


  return (
    <>
      <div className="container flex items-center justify-center px-6 mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col  justify-center items-center ">
            <img
              src={logo}
              alt="site-logo"
              className="w-[8rem] h-[8rem] logo object-contain mt-32  sm:mt-26 md:mt-32"
            />
          </div>

          <h1 class=" text-2xl font-poppins my-6 text-center font-semibold text-black capitalize sm:text-3xl ">
          <span className="text-[#ff58e7]">{ myName }</span> Love Anime
          </h1>

          <div class="relative flex items-center mt-8">
            <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="text"
              name="username"
              value={myName}
              required
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setMyName(e.target.value)}
              placeholder="Your Name"
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
            <FaceSmileIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>
            <select 
              onChange={(e) => setAnime(e.target.value)} 
              value={anime} 
              required
              name="anime" 
              className=" block w-full py-3 text-gray-400 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 appearance-none"
            >
              <option value='Naruto'>Naruto</option>
              <option value='One Piece'>One Piece</option>
              <option value='Attack on Titan'>Attack on Titan</option>
              <option value='Death note'>Death note</option>
              <option value='Other'>Other</option>
            </select>

          </div>



          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff58e7] rounded-lg hover:bg-[#0a0a23] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              type="submit"
            >
              Vote
            </button>
          </div>
        </form>
      </div>

      {vote && <Table vote={vote} setVote={setVote}/>}

    </>
  );
};
export default Form;
