import pickle
import numpy as np
import pandas as pd

def predict_disease(symp, total_symptoms): #total_symptoms - list
    with open('E:\\SRM\\MedicSage\\back-end\\python\\logistic_regression_model.pkl', 'rb') as file:
        lr = pickle.load(file)

    # Assuming total_symptoms is a list of valid feature names
    # If total_symptoms is a pandas Index object, convert it to a list
    if isinstance(total_symptoms, pd.Index):
        total_symptoms = total_symptoms.tolist()

    sample_x = [0 for _ in range(len(total_symptoms))]
    for val in symp:
        if val in total_symptoms:
            sample_x[total_symptoms.index(val)] = 1
        else:
            print(f"Warning: Feature '{val}' not found in total_symptoms.")

    sample_x_array = np.array(sample_x)
    sample_x_reshaped = sample_x_array.reshape(1, -1)
    disease = lr.predict(sample_x_reshaped)

    return disease


