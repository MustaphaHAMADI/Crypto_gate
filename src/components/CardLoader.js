const CardLoader = () => {
  return (
    <div class='bg-slate-800 rounded-xl m-5 flex flex-col   w-72    p-4   '>
      <div class='animate-pulse flex space-x-4 '>
        <div class='rounded-full bg-gray-700 h-10 w-10'></div>
        <div class='flex-1 space-y-6 py-1'>
          <div class='h-2 bg-gray-700 rounded'></div>
          <div class='space-y-3'>
            <div class='grid grid-cols-3 gap-4'>
              <div class='h-2 bg-gray-700 rounded col-span-2'></div>
              <div class='h-2 bg-gray-700 rounded col-span-1'></div>
            </div>

            <div class='h-2 bg-gray-700 rounded'></div>
            <div class='h-2 bg-gray-700 rounded'></div>
            <div class='h-2 bg-gray-700 rounded col-span-2'></div>
            <div class='h-2 bg-gray-700 rounded col-span-1'></div>
            <div class='h-2 bg-gray-700 rounded col-span-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
