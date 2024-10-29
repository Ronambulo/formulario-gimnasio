import { useForm } from 'react-hook-form';

export default function FormContacto() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="flex flex-col items-center gap-8 p-8 bg-slate-600 rounded-lg shadow-md h-[606px]">
			<h3 className="text-4xl font-bold mb-4">Información de contacto:</h3>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-md">
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Dirección:</label>
					<input
						type="text"
						{...register('address', { required: true, maxLength: 50 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.address?.type === 'required' && <span className="text-red-500 text-sm mt-1">La dirección es obligatoria</span>}
					{errors.address?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">Se ha excedido la longitud máxima</span>}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Ciudad:</label>
					<input
						type="text"
						{...register('city', { required: true, maxLength: 30 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.city?.type === 'required' && <span className="text-red-500 text-sm mt-1">La ciudad es obligatoria</span>}
					{errors.city?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">Se ha excedido la longitud máxima</span>}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Código Postal:</label>
					<input
						type="text"
						{...register('postalCode', { required: true, maxLength: 10 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.postalCode?.type === 'required' && <span className="text-red-500 text-sm mt-1">El código postal es obligatorio</span>}
					{errors.postalCode?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">Se ha excedido la longitud máxima</span>}
				</div>
				<input
					type="submit"
					value="Save"
					className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-300 cursor-pointer"
				/>
			</form>
		</div>
	);
}
