## What this repo is for

This repo is for the frontend testing of components for `ds-wagtail`. It is written in django in order to be as close to the real templates as possible. 

It is recommended to keep templates in here as close to `ds-wagtail` as possible. For example if `card-group-secondary-nav` is using `{{page.title}}` to render the card's title, do not change it in this repo. Instead structure your data in `data.py` to reflect the template tags.

Of course you can change the HTML/SASS, but it is recommended to only make template tag changes where absolutely necessary - for example, if a piece of template code is Wagtail specific and therefore crashes in this repo. This will reduce drift between the templates.

## Initial project setup (do this once)

- Navigate to the django folder in your terminal `cd django`
- Run `python -m venv venv && source venv/bin/activate  && pip install -r requirements.txt`

## Running the project (do this everytime you need to run the project)
- Make sure you're in the django directory: `cd django`
- Run `source venv/bin/activate` to reactivate your Python virtual environment
- Run `python manage.py runserver`
- Ignore any migration warnings (we're not using the database)


## Compiling SASS
- Open a terminal in the root of this repo
- Install SASS globally by running `npm install -g sass`.
- To watch and build the SASS, run `sass --watch django/frontend/sass/etna.scss:django/frontend/static/css/dist/etna.css`
- To modify styles, navigate to the `frontend/sass` folder in your editor.

## Adding a new page to the application

- Go to `views.py` and create a function to render your template HTML file
- Go to `data.py` and create a data object for your content. 
- Go  to `urls.py` and add the URL path you'd like for your page to the `urlpatterns` array, and the name of the function you created in `views.py`, for example `path('explorer/', views.explorer)` would be http://localhost:8000/explorer and use the `explorer` function from `views.py`

For example:

### views.py
```python
def index(request):
    return render(request, 'index.html', data.index);
```

### data.py
```python
index = {
    'title': 'ds-wagtail-frontend in django',
    'intro': 'Hello world'
}
```

### urls.py
```python
urlpatterns = [
    path('', views.index),
]
```