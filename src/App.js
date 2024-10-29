import './App.css';
import { useState } from 'react';
import FormPersonal from './components/FormPersonal';
import FormContacto from './components/FormContacto';
import FormPreferencias from './components/FormPreferencias';
import FormBilling from './components/FormBilling';

function App() {
	const [currentTab, setCurrentTab] = useState(1);
	const [data, setData] = useState({
		personal: {},
		contacto: {},
		preferencias: {},
		billing: {},
	});

	const updateData = (formName, formData) => {
		setData((prevData) => {
			const newData = { ...prevData, [formName]: formData };
			console.log(newData);
			return newData;
		});
	};

	const renderTabContent = () => {
		switch (currentTab) {
			case 1:
				return <FormPersonal updateData={updateData} />;
			case 2:
				return <FormContacto updateData={updateData} />;
			case 3:
				return <FormPreferencias updateData={updateData} />;
			case 4:
				return <FormBilling updateData={updateData} />;
			case 5:
				return (
					<div className="flex flex-col gap-8 p-8 bg-slate-600 rounded-lg shadow-md h-[606px]">
						<h2 className="text-center mb-4">Resumen de la información</h2>
						<pre className="bg-slate-800 p-4 rounded-lg text-left overflow-auto text-sm">{JSON.stringify(data, null, 2)}</pre>
						<button
							className="mt-4 px-4 py-2 bg-green-500 rounded text-white w-full"
							onClick={() => {
								// Código para enviar los datos a una API
								// fetch('https://api.example.com/submit', {
								// 	method: 'POST',
								// 	headers: {
								// 		'Content-Type': 'application/json',
								// 	},
								// 	body: JSON.stringify(data),
								// })
								// .then(response => response.json())
								// .then(result => console.log('Success:', result))
								// .catch(error => console.error('Error:', error));
							}}
						>
							Enviar
						</button>
					</div>
				);
			default:
				return null;
		}
	};

	const goToNextTab = () => {
		if (currentTab < 5) setCurrentTab(currentTab + 1);
	};

	const goToPreviousTab = () => {
		if (currentTab > 1) setCurrentTab(currentTab - 1);
	};

	return (
		<div className="bg-slate-600 w-screen h-screen flex items-center justify-center text-neutral-200">
			<div className="bg-slate-700 w-[600px] h-2/3 p-4 rounded-2xl">
				{renderTabContent()}
				<div className="flex justify-between items-center mt-4">
					<button
						onClick={goToPreviousTab}
						disabled={currentTab === 1}
						className={`${currentTab === 1 ? 'opacity-50 cursor-not-allowed' : ''} px-4 py-2 bg-blue-500 rounded text-white`}
					>
						Anterior
					</button>
					<div>Página {currentTab} de 5</div>
					<button
						onClick={goToNextTab}
						disabled={currentTab === 5}
						className={`${currentTab === 5 ? 'opacity-50 cursor-not-allowed' : ''} px-4 py-2 bg-blue-500 rounded text-white`}
					>
						Siguiente
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
