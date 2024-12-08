import { getIcons } from '@/src/iconLoader';
import dynamic from 'next/dynamic';

const IconsDemo = async () => {
  const icons = await getIcons();

  return (
    <div className='bg-slate-400 p-10'>
      <table className='mx-auto border w-[400px]  border-slate-100/50 p-5 rounded-xl block '>
        <thead className='text-white text-2xl border-b border-slate-100/50 h-20 w-[400px]'>
          <tr className='w-[400px]'>
            <th>Name</th>
            <th className='w-[270px]'>Icon</th>
          </tr>
        </thead>

        <tbody className='text-center w-full'>
          {icons.map((icon, index) => {
            const IconComponent = dynamic(() =>
              import(`../../../assets/icons/${icon}`).then(
                (mod) => mod.default
              )
            );

            return (
              <tr
                className='border-b border-slate-100/50 h-20 last:border-0'
                key={index}
              >
                <td className='text-white text-xl'>
                  {icon}
                </td>
                <td>
                  <div className='w-fit mx-auto text-white'>
                    <IconComponent className='size-10' />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IconsDemo;
