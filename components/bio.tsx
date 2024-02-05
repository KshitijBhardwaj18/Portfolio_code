import { Twitter, Github } from 'lucide-react';

interface bioProps{

}


const Bio: React.FC<bioProps> = () => {
    return ( 
        <div className="max-w-[803px] mx-auto p-5 flex flex-col gap-2  ">
        <p className="text-3xl font-bold">Oh, Hello there 👋</p>
        <ul className="text-[#8c9a94] flex flex-col gap-2">
          <li >🥷My name is <span className="text-white" >Kshitij Bhardwaj</span>, I speacialize in javacript and typescript technolgies</li>
          <li>💻 I like to take full ownership of projects and ship high quality products before deadlines</li>
          <li>🚀Shipping high quality webapps is my latest montage.</li>
          
        </ul>

        <p className="text-[#8c9a94] pt-3">This blog will serve as a home for all my thoughts, projects, notes and experiences, ranging from programming to math, machine learning, web development and more. </p>
        <span className="flex gap-2">
          <a className='transform hover:scale-150 transition-transform' href="https://twitter.com/KshtjBhardwaj18"><Twitter/></a>
          <a className='transform hover:scale-150 transition-transform'  href="https://github.com/KshitijBhardwaj18/"><Github/></a>
          
          
        </span>
      </div>
     );
}
 
export default Bio;