import pandas as pd
from symptom_preprocessing import preprocess_symptoms
import warnings
warnings.simplefilter('ignore')

import sys
symptoms = sys.argv[1]
# print(symptoms)

df_norm = pd.read_csv("E:\\SRM\\MedicSage\\back-end\\python\\datasets\\dis_sym_norm.csv")
total_symptoms = df_norm.columns[1:]

found_symptoms = preprocess_symptoms(symptoms, total_symptoms, df_norm)
print(list(found_symptoms))
sys.stdout.flush()

# for i in range(0,len(found_symptoms)):
#     print(i, found_symptoms[i])

# symptoms = [sym.strip().replace('-', ' ').replace("'", '') for sym in symptoms.split(',')]
# print(symptoms)
