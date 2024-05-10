from nltk.corpus import wordnet 
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import RegexpTokenizer
from itertools import combinations
from collections import Counter
import operator
import pandas as pd

def preprocess_symptoms(user_input, total_symptoms, df_norm):
    def synonyms(term):
        synonyms = []
        return set(synonyms)

    symptoms_lower = user_input.lower()
    symptoms_cleaned = [sym.strip().replace('-', ' ').replace("'", '') for sym in symptoms_lower.split(',')]

    user_symptoms = []
    for user_sym in symptoms_cleaned:
        user_sym = user_sym.split()
        str_sym = set()
        for comb in range(1, len(user_sym)+1):
            for subset in combinations(user_sym, comb):
                subset = ' '.join(subset)
                subset = synonyms(subset)  # Retrieve synonyms
                str_sym.update(subset)
        str_sym.add(' '.join(user_sym))
        user_symptoms.append(' '.join(str_sym).replace('_', ' '))

    symptoms = set()
    for idx, data_sym in enumerate(total_symptoms):
        data_sym_split = data_sym.split()
        for user_sym in user_symptoms:
            count = 0
            for symp in data_sym_split:
                if symp in user_sym.split():
                    count += 1
            if count / len(data_sym_split) > 0.5:
                symptoms.add(data_sym)

    dis_list = set()
    final_symp = [] 
    counter_list = []
    for idx, symp in enumerate(symptoms):
        dis_list.update(set(df_norm[df_norm[symp] == 1]['label_dis']))
        final_symp.append(symp)
        counter_list.append(idx)

    for dis in dis_list:
        row = df_norm.loc[df_norm['label_dis'] == dis].values.tolist()
        row[0].pop(0)
        for idx,val in enumerate(row[0]):
            if val != 0 and total_symptoms[idx] not in final_symp:
                counter_list.append(total_symptoms[idx])

    dict_symp = dict(Counter(counter_list))
    dict_symp_tup = sorted(dict_symp.items(), key=operator.itemgetter(1), reverse=True)
    
    found_symptoms = []
    for idx, tup in enumerate(dict_symp_tup):
        found_symptoms.append(tup[0])
        
    # Check if the length of found_symptoms is less than or equal to 20
    if len(found_symptoms) <= 20:
        return tuple(found_symptoms)
    else:
        return tuple(found_symptoms[:20])
