import { FiGitBranch } from "react-icons/fi"

const projectCard = ({ name, link, desc }) => {
  return (
    <div className="mt-6 rounded  border-gray-200 border   p-4 ">
      <h3 className="text-lg  font-medium">{name}</h3>
      <p className="mt-1 mb-4">{desc}</p>
      <button className="px-2 py-1 flex items-center text-sm rounded mr-2 hover:scale-95 transition-transform border-primary border-2">
        <FiGitBranch />
        <a href={link} className="ml-2">
          Source Code
        </a>
      </button>
    </div>
  )
}

export default projectCard
