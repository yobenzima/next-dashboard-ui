"use client";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-heliosYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Trip to the north</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py1">
              2024-10-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Coolest trip to visit Nyika and Vwaza National Parks
          </p>
        </div>
        <div className="bg-heliosPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Visit to Mvuu Farm</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py1">
              2024-10-10
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Coolest trip to visit Mvuu Farm and Lake Malawi National Park in
            Liwonde
          </p>
        </div>
        <div className="bg-heliosYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Meeting to chart new ventures</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py1">
              2024-10-19
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Way forward meeting</p>
        </div>
        <div className="bg-heliosPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Party at the Gymkhana Club - Zomba</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py1">
              2024-10-25
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Heroes party at the club</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
