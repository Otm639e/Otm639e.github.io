def get_filtered_cars(clean_df ,budget, fuelTypes, transmissionPreferences, drivetrainPreferences, minPreferedMPG):
    filtered_df = clean_df[clean_df['Price'] < budget]
    filtered_df = filtered_df[filtered_df["Fuel_Type"].isin(fuelTypes)]
    filtered_df = filtered_df[filtered_df["Transmission"].isin(transmissionPreferences)]
    filtered_df = filtered_df[filtered_df["Drivetrain"].isin(drivetrainPreferences)]
    filtered_df = filtered_df[filtered_df['min_MPG'] > minPreferedMPG]
    models = filtered_df['Model'].unique()
    model_lst = list(models)
    return model_lst