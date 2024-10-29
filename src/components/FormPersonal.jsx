import { useForm } from 'react-hook-form';

export default function FormPersonal() {
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
			<h3 className="text-4xl font-bold mb-4">Formulario de registro:</h3>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-md">
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Nombre:</label>
					<input
						type="text"
						{...register('name', { required: true, maxLength: 20 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.name?.type === 'required' && <span className="text-red-500 text-sm mt-1">El nombre es obligatorio</span>}
					{errors.name?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">Se ha excedido la longitud máxima</span>}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Email:</label>
					<input
						type="email"
						{...register('email', { required: true, maxLength: 30 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.email?.type === 'required' && <span className="text-red-500 text-sm mt-1">El correo electrónico es obligatorio</span>}
					{errors.email?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">Se ha excedido la longitud máxima</span>}
				</div>
				<div className="flex flex-col h-[100px]">
					<label className="mb-2 font-medium">Teléfono:</label>
					<input
						type="number"
						{...register('phoneNumber', { required: true, maxLength: 9, minLength: 9 })}
						className="bg-white border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					{errors.phoneNumber?.type === 'required' && (
						<span className="text-red-500 text-sm mt-1">El número de teléfono es obligatorio</span>
					)}
					{errors.phoneNumber?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">El número tiene más de 9 dígitos</span>}
					{errors.phoneNumber?.type === 'minLength' && (
						<span className="text-red-500 text-sm mt-1">El número tiene menos de 9 dígitos</span>
					)}
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
