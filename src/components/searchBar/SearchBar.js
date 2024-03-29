import './SearchBar.css'
import React, {useEffect} from 'react'

function SearchBar() {
  useEffect(() => {
    
    
  })
  const show = (el) => {
  
    document.getElementById("div1").classList.toggle("translate-x-full");
    const setting=  document.getElementById("setting")
  if(setting.classList.contains("block")){
    setting.classList.remove("block");
    setting.classList.add("hidden");
  }
  else{
  setting.classList.remove("hidden");
  setting.classList.add("block");
    
  }
  const close= document.getElementById("close");
  console.log(close.classList.contains("hidden"));
if(!close.classList.contains("hidden")){
  close.classList.remove("block");
    close.classList.add("hidden");
  }
  else{

    close.classList.remove("hidden");
  close.classList.add("block");
  
  
    
}}
  return (
    
    <>
<div className="py-12 px-4 ">
  <div className="lg:max-w-[356px] md:max-w-[696px] max-w-[343px] w-full mx-auto bg-white py-7 overflow-hidden">
    <div className="flex justify-between px-3 pb-5 border-b border-gray-100">   
      <div className="flex items-center gap-2 ">
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.63633 2.5C7.42268 2.5 6.23628 2.85989 5.22717 3.53416C4.21806 4.20843 3.43155 5.16679 2.9671 6.28806C2.50266 7.40932 2.38114 8.64314 2.61791 9.83347C2.85468 11.0238 3.43911 12.1172 4.29729 12.9754C5.15547 13.8335 6.24886 14.418 7.43919 14.6547C8.62952 14.8915 9.86334 14.77 10.9846 14.3056C12.1059 13.8411 13.0642 13.0546 13.7385 12.0455C14.4128 11.0364 14.7727 9.84998 14.7727 8.63633C14.7726 7.0089 14.126 5.44817 12.9753 4.2974C11.8245 3.14664 10.2638 2.5001 8.63633 2.5V2.5Z" stroke="#4B5563" strokeWidth="1.25" strokeMiterlimit={10} />
          <path d="M13.2144 13.2148L17.4999 17.5004" stroke="#4B5563" strokeWidth="1.25" strokeMiterlimit={10} strokeLinecap="round" />
        </svg>
        <input type="text" name id placeholder="Search" className="focus:outline-none" />
      </div>
      <div className id="target">
        <div className="relative">
          <button onClick={show}>
            <div id="setting" className="block">
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2458 7.51211C9.73283 7.46145 9.21678 7.57057 8.76825 7.82454C8.31973 8.07851 7.96067 8.4649 7.74023 8.93082C7.51979 9.39673 7.44875 9.91939 7.53684 10.4272C7.62493 10.9351 7.86783 11.4033 8.2323 11.7678C8.59676 12.1322 9.06497 12.3751 9.57282 12.4632C10.0807 12.5513 10.6033 12.4803 11.0693 12.2598C11.5352 12.0394 11.9216 11.6803 12.1755 11.2318C12.4295 10.7833 12.5386 10.2672 12.488 9.7543C12.4302 9.17929 12.1754 8.64193 11.7668 8.23329C11.3581 7.82465 10.8208 7.56986 10.2458 7.51211V7.51211ZM16.2653 10C16.2637 10.2717 16.2437 10.5431 16.2055 10.8121L17.9716 12.1973C18.0485 12.261 18.1003 12.35 18.1178 12.4483C18.1353 12.5466 18.1174 12.648 18.0673 12.7344L16.3966 15.625C16.3458 15.7106 16.2665 15.7754 16.1726 15.8082C16.0787 15.841 15.9762 15.8396 15.8833 15.8043L14.1294 15.098C14.0326 15.0595 13.9279 15.0456 13.8245 15.0576C13.721 15.0695 13.6222 15.1069 13.5368 15.1664C13.2691 15.3507 12.9878 15.5145 12.6954 15.6562C12.6034 15.7009 12.5239 15.7676 12.4638 15.8503C12.4037 15.933 12.3649 16.0292 12.3508 16.1305L12.088 18.0012C12.0707 18.1 12.0197 18.1897 11.9436 18.255C11.8675 18.3204 11.771 18.3573 11.6708 18.3594H8.32936C8.23075 18.3577 8.13565 18.3224 8.05975 18.2594C7.98384 18.1965 7.93166 18.1095 7.91179 18.0129L7.64929 16.1449C7.63455 16.0426 7.59474 15.9454 7.53341 15.8621C7.47207 15.7789 7.39111 15.712 7.29772 15.6676C7.00562 15.5266 6.72529 15.3624 6.45944 15.1766C6.37432 15.1173 6.27581 15.0802 6.17277 15.0686C6.06973 15.0569 5.96541 15.0711 5.86921 15.1098L4.11569 15.8156C4.02277 15.851 3.92033 15.8525 3.82644 15.8197C3.73254 15.787 3.65321 15.7222 3.60241 15.6367L1.93171 12.7461C1.88148 12.6597 1.86353 12.5583 1.88105 12.46C1.89858 12.3616 1.95044 12.2727 2.02741 12.209L3.51999 11.0371C3.60176 10.9722 3.66603 10.8879 3.70696 10.7918C3.74789 10.6958 3.76418 10.5911 3.75436 10.4871C3.7403 10.3242 3.73171 10.1617 3.73171 9.99883C3.73171 9.83594 3.73991 9.67578 3.75436 9.51641C3.76311 9.4131 3.74601 9.30924 3.70462 9.21418C3.66323 9.11912 3.59884 9.03585 3.51725 8.97187L2.02546 7.8C1.94974 7.73597 1.89897 7.64734 1.88204 7.54964C1.86511 7.45194 1.88311 7.35139 1.93288 7.26562L3.60358 4.375C3.65432 4.28945 3.73363 4.22455 3.82753 4.19175C3.92143 4.15895 4.02389 4.16035 4.11686 4.1957L5.87077 4.90195C5.96749 4.94046 6.07225 4.95438 6.17567 4.94245C6.27909 4.93052 6.37794 4.89311 6.46335 4.83359C6.73103 4.64927 7.0123 4.48552 7.30476 4.34375C7.3967 4.29906 7.47623 4.23242 7.53631 4.14972C7.5964 4.06701 7.6352 3.97078 7.64929 3.86953L7.91218 1.99883C7.92944 1.90003 7.98049 1.8103 8.05658 1.74496C8.13267 1.67963 8.22909 1.64275 8.32936 1.64062H11.6708C11.7694 1.64233 11.8645 1.67758 11.9404 1.74056C12.0163 1.80354 12.0685 1.8905 12.0883 1.98711L12.3508 3.85508C12.3656 3.95745 12.4054 4.05459 12.4667 4.13787C12.5281 4.22114 12.609 4.28798 12.7024 4.33242C12.9945 4.47342 13.2748 4.63762 13.5407 4.82344C13.6258 4.88266 13.7243 4.91978 13.8274 4.93144C13.9304 4.9431 14.0347 4.92894 14.1309 4.89023L15.8844 4.18438C15.9774 4.14899 16.0798 4.14753 16.1737 4.18026C16.2676 4.21299 16.3469 4.2778 16.3977 4.36328L18.0684 7.25391C18.1187 7.34027 18.1366 7.44165 18.1191 7.54001C18.1016 7.63837 18.0497 7.72732 17.9727 7.79102L16.4801 8.96289C16.398 9.02759 16.3334 9.1118 16.2921 9.20786C16.2508 9.30392 16.2342 9.40878 16.2438 9.51289C16.2567 9.67461 16.2653 9.83711 16.2653 10Z" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div id="close" className="hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
          <div className="lg:min-w-[356px] md:min-w-[696px] min-w-[343px] translate-x-full top-0 transition-all duration-100 ease-linear absolute right-[-12px] bg-white  py-4" id="div1">
            <p className="text-base font-semibold leading-none text-gray-800  pb-5 border-b border-gray-100 px-3 py-5">Search Preferences</p>
            <div className="pb-5 border-b border-gray-100 ">
              <div className="flex justify-between items-center pt-4  px-4 py-3">
                <div>
                  <p className="text-sm leading-none text-gray-600">Projects</p>
                </div>
                <div>
                  <label htmlFor="toggle" className="flex items-center cursor-pointer">
              
                    <div className="relative -left-6">
                   
                      <input type="checkbox" id="toggle" className="sr-only" />
                 
                      <div className="bg block bg-indigo-100 w-10 h-6 rounded-full" />
               
                      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between pt-4  px-4 py-3">
                <div>
                  <p className="text-sm leading-none text-gray-600 ">Users</p>
                </div>
                <div>
                  <label htmlFor="toggle2" className="flex items-center cursor-pointer">
                
                    <div className="relative -left-6">
           
                      <input type="checkbox" id="toggle2" className="sr-only" />
                
                      <div className="bg2 block bg-indigo-100 w-10 h-6 rounded-full" />
               
                      <div className="dot2 absolute left-1 top-1 bg-white w w-4 h-4 rounded-full transition" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between pt-4  px-4 py-3">
                <div>
                  <p className="text-sm leading-none text-gray-600">Programs</p>
                </div>
                <div>
                  <label htmlFor="toggle3" className="flex items-center cursor-pointer">
                 
                    <div className="relative -left-6">
                
                      <input type="checkbox" id="toggle3" className="sr-only" />
            
                      <div className="bg3 block bg-indigo-100 w-10 h-6 rounded-full" />
               
                      <div className="dot3 absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between pt-4  px-4 py-3">
                <div>
                  <p className="text-sm leading-none text-gray-600 ">Targets</p>
                </div>
                <div>
                  <label htmlFor="toggle4" className="flex items-center cursor-pointer">
           
                    <div className="relative -left-6">
               
                      <input type="checkbox" id="toggle4" className="sr-only" />
           
                      <div className="bg4 block bg-indigo-100 w-10 h-6 rounded-full" />
        
                      <div className="dot4 absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between pt-4  px-4 py-3">
                <div>
                  <p className="text-sm leading-none text-gray-600">Referrals</p>
                </div>
                <div>
                  <label htmlFor="toggle5" className="flex items-center cursor-pointer">
          
                    <div className="relative -left-6">
       
                      <input type="checkbox" id="toggle5" className="sr-only" />
        
                      <div className="bg5 block bg-indigo-100 w-10 h-6 rounded-full" />
 
                      <div className="dot5 absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div onClick={show} className="lg:flex-row flex-col flex lg:mt-8  justify-end gap-3  px-3 w-full">
              <button className="lg:max-w-[100px] w-full  rounded text-indigo-700 border border-indigo-700 font-medium hover:text-white hover:bg-indigo-700 duration-200 py-3 px-3">Cancel</button>
              <button className="lg:max-w-[150px] w-full  rounded text-indigo-700 border border-indigo-700 font-medium hover:text-white hover:bg-indigo-700 duration-200 py-3 px-3">Save Changes</button>        
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-y-scroll h-[400px]">
      <div className="px-3 pb-5 border-b border-gray-100">
        <div className="pt-6 ">
          <p className="text-base font-semibold leading-none text-gray-800">Latest Searches</p>
          <p className="text-sm font-medium leading-none text-gray-800 pt-4">Projects</p>
        </div>
        <div className="flex pt-5 gap-3">
          <div className="w-8 h-8">
            <div className="flex items-center justify-center flex-1 h-full p-2 bg-indigo-100 rounded">
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.75 13.5H13.25C13.0511 13.5 12.8603 13.421 12.7197 13.2803C12.579 13.1397 12.5 12.9489 12.5 12.75V3.25C12.5 3.05109 12.579 2.86032 12.7197 2.71967C12.8603 2.57902 13.0511 2.5 13.25 2.5H14.75C14.9489 2.5 15.1397 2.57902 15.2803 2.71967C15.421 2.86032 15.5 3.05109 15.5 3.25V12.75C15.5 12.9489 15.421 13.1397 15.2803 13.2803C15.1397 13.421 14.9489 13.5 14.75 13.5V13.5Z" fill="#4338CA" />
                <path d="M10.75 13.5H9.25C9.05109 13.5 8.86032 13.421 8.71967 13.2803C8.57902 13.1397 8.5 12.9489 8.5 12.75V5.75C8.5 5.55109 8.57902 5.36032 8.71967 5.21967C8.86032 5.07902 9.05109 5 9.25 5H10.75C10.9489 5 11.1397 5.07902 11.2803 5.21967C11.421 5.36032 11.5 5.55109 11.5 5.75V12.75C11.5 12.9489 11.421 13.1397 11.2803 13.2803C11.1397 13.421 10.9489 13.5 10.75 13.5Z" fill="#4338CA" />
                <path d="M6.75 13.5H5.25C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75V7.75C4.5 7.55109 4.57902 7.36032 4.71967 7.21967C4.86032 7.07902 5.05109 7 5.25 7H6.75C6.94891 7 7.13968 7.07902 7.28033 7.21967C7.42098 7.36032 7.5 7.55109 7.5 7.75V12.75C7.5 12.9489 7.42098 13.1397 7.28033 13.2803C7.13968 13.421 6.94891 13.5 6.75 13.5Z" fill="#4338CA" />
                <path d="M2.75 13.5H1.25C1.05109 13.5 0.860322 13.421 0.71967 13.2803C0.579018 13.1397 0.5 12.9489 0.5 12.75V9.75C0.5 9.55109 0.579018 9.36032 0.71967 9.21967C0.860322 9.07902 1.05109 9 1.25 9H2.75C2.94891 9 3.13968 9.07902 3.28033 9.21967C3.42098 9.36032 3.5 9.55109 3.5 9.75V12.75C3.5 12.9489 3.42098 13.1397 3.28033 13.2803C3.13968 13.421 2.94891 13.5 2.75 13.5Z" fill="#4338CA" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-800">Project Alpha</p>
            <p className="text-xs  text-gray-600 pt-0.5">Trading tool for stoks and funds</p>
          </div>
        </div>
        <div className="flex pt-5 gap-3">
          <div className="w-8 h-8">
            <div className="flex items-center justify-center flex-1 h-full p-2 bg-indigo-100 rounded">
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.24768 4.66406L7.41643 7.64281C7.57705 7.71938 7.79143 7.75938 8.00361 7.75938C8.2158 7.75938 8.43018 7.71938 8.59049 7.64281L14.7592 4.66406C15.0836 4.50781 15.0836 4.25219 14.7592 4.09531L8.59049 1.11656C8.43018 1.04 8.21549 1 8.00361 1C7.79174 1 7.57705 1.04 7.41643 1.11656L1.24768 4.09531C0.923301 4.25219 0.923301 4.50719 1.24768 4.66406Z" fill="#4338CA" />
                <path d="M14.7596 7.71602C14.7596 7.71602 13.633 7.17289 13.4836 7.09977C13.3342 7.02664 13.2939 7.0307 13.1371 7.10352C12.9802 7.17633 8.58705 9.2982 8.58705 9.2982C8.40187 9.37816 8.20186 9.41799 8.00018 9.41508C7.78861 9.41508 7.57361 9.37477 7.4133 9.2982C7.4133 9.2982 3.13674 7.2357 2.93611 7.13633C2.71893 7.03164 2.65643 7.03164 2.45861 7.12539L1.23986 7.71227C0.915488 7.86852 0.915488 8.12445 1.23986 8.28102L7.40955 11.2598C7.56986 11.3363 7.78455 11.3763 7.99643 11.3763C8.2083 11.3763 8.42299 11.3363 8.58361 11.2598L14.7524 8.28164C15.0839 8.12789 15.0839 7.87289 14.7596 7.71602Z" fill="#4338CA" />
                <path d="M14.7593 11.3365C14.7593 11.3365 13.6327 10.7933 13.4833 10.7193C13.334 10.6452 13.2937 10.6502 13.1368 10.723C12.9799 10.7958 8.59053 12.9224 8.59053 12.9224C8.40532 13.0022 8.20531 13.0419 8.00365 13.039C7.79209 13.039 7.57709 12.999 7.41647 12.9224C7.41647 12.9224 3.1399 10.8599 2.93959 10.7605C2.72084 10.6546 2.65834 10.6546 2.46178 10.7496L1.24303 11.3365C0.91834 11.4927 0.91834 11.7483 1.24303 11.9052L7.41178 14.884C7.57209 14.964 7.78678 15.0005 7.99865 15.0005C8.21053 15.0005 8.42522 14.9605 8.58553 14.884L14.7555 11.9068C15.0837 11.7483 15.0837 11.4933 14.7593 11.3365Z" fill="#4338CA" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-800">CNN News Report</p>
            <p className="text-xs  text-gray-600 pt-0.5">News and communications</p>
          </div>
        </div>
        <div className="flex pt-5 gap-3">
          <div className="w-8 h-8">
            <div className="flex items-center justify-center flex-1 h-full p-2 bg-indigo-100 rounded">
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 14.5H7C6.86739 14.5 6.74021 14.5527 6.64645 14.6464C6.55268 14.7402 6.5 14.8674 6.5 15C6.5 15.1326 6.55268 15.2598 6.64645 15.3536C6.74021 15.4473 6.86739 15.5 7 15.5H9C9.13261 15.5 9.25979 15.4473 9.35355 15.3536C9.44732 15.2598 9.5 15.1326 9.5 15C9.5 14.8674 9.44732 14.7402 9.35355 14.6464C9.25979 14.5527 9.13261 14.5 9 14.5Z" fill="#4338CA" />
                <path d="M9.5 13H6.5C6.36739 13 6.24021 13.0527 6.14645 13.1464C6.05268 13.2402 6 13.3674 6 13.5C6 13.6326 6.05268 13.7598 6.14645 13.8536C6.24021 13.9473 6.36739 14 6.5 14H9.5C9.63261 14 9.75979 13.9473 9.85355 13.8536C9.94732 13.7598 10 13.6326 10 13.5C10 13.3674 9.94732 13.2402 9.85355 13.1464C9.75979 13.0527 9.63261 13 9.5 13Z" fill="#4338CA" />
                <path d="M11.5444 1.95908C10.6047 1.01814 9.34595 0.500014 8.00001 0.500014C7.34297 0.498448 6.69208 0.626708 6.08475 0.877427C5.47741 1.12815 4.92559 1.49638 4.46099 1.96099C3.99638 2.42559 3.62815 2.97741 3.37743 3.58475C3.12671 4.19208 2.99845 4.84297 3.00001 5.50001C3.00001 6.95689 3.55845 8.3197 4.53126 9.23876L4.66751 9.36658C5.23033 9.89283 6.00001 10.6138 6.00001 11.25V12C6.00001 12.1326 6.05269 12.2598 6.14646 12.3536C6.24023 12.4473 6.36741 12.5 6.50001 12.5H7.25001C7.31632 12.5 7.37991 12.4737 7.42679 12.4268C7.47368 12.3799 7.50001 12.3163 7.50001 12.25V8.58814C7.50003 8.53758 7.48472 8.48821 7.4561 8.44653C7.42748 8.40486 7.38689 8.37284 7.3397 8.3547C7.05098 8.23691 6.7767 8.08645 6.5222 7.90626C6.46501 7.86974 6.41585 7.82196 6.37772 7.76584C6.33959 7.70971 6.31328 7.64641 6.3004 7.57978C6.28752 7.51316 6.28833 7.44461 6.30279 7.37832C6.31725 7.31202 6.34505 7.24936 6.3845 7.19415C6.42395 7.13894 6.47423 7.09234 6.53227 7.05719C6.59031 7.02203 6.6549 6.99906 6.7221 6.98967C6.78931 6.98028 6.85772 6.98466 6.92317 7.00256C6.98862 7.02046 7.04975 7.05149 7.10283 7.09376C7.33408 7.25751 7.77939 7.50001 8.00001 7.50001C8.22064 7.50001 8.66595 7.25689 8.89783 7.09376C9.00579 7.02589 9.13561 7.00183 9.26073 7.02652C9.38585 7.0512 9.4968 7.12276 9.5709 7.22656C9.64499 7.33036 9.67662 7.45854 9.65932 7.58489C9.64202 7.71124 9.5771 7.82621 9.47783 7.90626C9.22329 8.08613 8.94901 8.23627 8.66033 8.35376C8.61314 8.3719 8.57255 8.40392 8.54393 8.4456C8.51531 8.48727 8.5 8.53665 8.50001 8.5872V12.25C8.50001 12.3163 8.52635 12.3799 8.57324 12.4268C8.62012 12.4737 8.68371 12.5 8.75001 12.5H9.50002C9.63262 12.5 9.7598 12.4473 9.85357 12.3536C9.94734 12.2598 10 12.1326 10 12V11.25C10 10.6288 10.7613 9.90845 11.3172 9.3822L11.4706 9.23658C12.4713 8.28126 13 6.98783 13 5.50001C13.0033 4.8429 12.8764 4.19165 12.6265 3.58388C12.3767 2.97611 12.0089 2.42387 11.5444 1.95908V1.95908Z" fill="#4338CA" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-800">Project Beta Ideation and Research</p>
            <p className="text-xs  text-gray-600 pt-0.5">News and communications</p>
          </div>
        </div>
      </div>
      <div className="px-3 pt-4">
        <div>
          <p className="text-sm font-medium  text-gray-800">Users</p>
          <div className="flex pt-5 gap-3">
            <div className>
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Mask%20Group.png" alt="" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-800">CNN News Report</p>
              <p className="text-xs  text-gray-600 pt-0.5">News and communications</p>
            </div>
          </div>
          <div className="flex pt-5 gap-3">
            <div className>
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2.png" alt="" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-800">Frankie Streich</p>
              <p className="text-xs  text-gray-600 pt-0.5">Global Research Designer</p>
            </div>
          </div>
          <div className="flex pt-5 gap-3">
            <div className>
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4.png" alt="" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-800">Jenny Wilson</p>
              <p className="text-xs  text-gray-600 pt-0.5">Lead Quality Analyst</p>
            </div>
          </div>
          <div className="flex pt-5 gap-3">
            <div className>
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/5.png" alt="" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-800">Arlene McCoy</p>
              <p className="text-xs  text-gray-600 pt-0.5">Legacy Group Officer</p>
            </div>
          </div>
          <div className="flex pt-5 gap-3">
            <div className>
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3.png" alt="" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-800">Sherri Gottlieb</p>
              <p className="text-xs  text-gray-600 pt-0.5">Product Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<style>
{`
 ::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 20px; 
}
::-webkit-scrollbar-thumb {
  background: #E0E7FF;
  border-radius: 20px; 
}
input:checked ~ .dot   {
transform: translateX(100%);
background-color: #ffffff;
}
input:checked ~  .bg{
background-color: #4338CA;
}

input:checked ~ .dot1   {
transform: translateX(100%);
background-color: #ffffff;
}
input:checked ~  .bg1{
background-color: #4338CA;
}

input:checked ~ .dot2   {
transform: translateX(100%);
background-color: #ffffff;
}
input:checked ~  .bg2{
background-color: #4338CA;
}

input:checked ~ .dot3   {
transform: translateX(100%);
background-color: #ffffff;
}
input:checked ~  .bg3{
background-color: #4338CA;
}

input:checked ~ .dot4   {
transform: translateX(100%);
background-color: #ffffff;
}
input:checked ~  .bg4{
background-color: #4338CA;
}
input:checked ~ .dot5   {
transform: translateX(100%);
background-color: #ffffff;
}
input:checked ~  .bg5{
background-color: #4338CA;
}
`}

</style>

  

    </>



  )
}

export default SearchBar;
