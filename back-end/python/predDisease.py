import pickle
import numpy as np
import pandas as pd
import sys


symptoms = sys.argv[1]
symptoms = [sym.strip().replace('-', ' ') for sym in symptoms.split(',')]
# print(f'symptoms: {symptoms}')

df_norm = pd.read_csv("E:\\SRM\\MedicSage\\back-end\\python\\datasets\\dis_sym_norm.csv")
total_symptoms = df_norm.columns[1:]

with open('E:\\SRM\\MedicSage\\back-end\\python\\logistic_regression_model.pkl', 'rb') as file:
        lr = pickle.load(file)

total_symptoms = total_symptoms.tolist()
# print(f'\n\n\ntotalsymptoms as list: {total_symptoms}')

sample_x = [0 for _ in range(len(total_symptoms))]
# print(f'\n\n\nsample_x: {sample_x}')

for val in symptoms:
    if val in total_symptoms:
        sample_x[total_symptoms.index(val)] = 1

sample_x_array = np.array(sample_x)
sample_x_reshaped = sample_x_array.reshape(1, -1)
sample_x_reshaped = pd.DataFrame(sample_x_reshaped, columns=total_symptoms)
disease = lr.predict(sample_x_reshaped)
print(disease[0])

sys.stdout.flush()



