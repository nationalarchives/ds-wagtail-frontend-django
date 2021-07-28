## What this repo is for

This repo is for the frontend testing of components for `ds-wagtail`. It is written in django in order to be as close to the real templates as possible. 

It is recommended to keep templates in here as close to `ds-wagtail` as possible. For example if `card-group-secondary-nav` is using `{{page.title}}` to render the card's title, do not change it in this repo. Instead structure your data in `data.py` or in a for loop to reflect the template tags.

Of course the HTML and SASS will change, but it is recommended to only make template tag changes where absolutely necessary - for example, if a piece of template code is Wagtail specific, and therefore crashes in this repo, you can change template tags to fix this. 

Adopting this approach will reduce drift between the templates and make it easier to implement updates into `ds-wagtail`.

## Initial project setup (do this once)

- Run `python -m venv venv && source venv/bin/activate  && pip install -r requirements-dev.txt`

## Running the project (do this everytime you need to run the project)

- Run `source venv/bin/activate` to reactivate your Python virtual environment
- Go into the django directory at `cd django`
- Run `python manage.py runserver`
- Ignore any migration warnings (we're not using the database)
- Navigate to http://localhost:8000 in your browser

## Compiling SASS
- Open a terminal in the root of this repo
- Install SASS globally by running `npm install -g sass`.
- To watch and build the SASS, run `sass --watch django/frontend/sass/etna.scss:django/frontend/static/css/dist/etna.css`
- To modify styles, navigate to the `frontend/sass` folder in your editor.

## Adding a new page to the application

- Go to `views.py` and create a function to render your template HTML file
- Go to `data.py` and create a data object for your content. 
- Go  to `urls.py` and add the URL path you'd like for your page to the `urlpatterns` array, and the name of the function you created in `views.py`, for example `path('explorer/', views.explorer)` would be http://localhost:8000/explorer and use the `explorer` function from `views.py`

For example, to create an Explorer homepage:

### views.py
```python
def explorer(request):
    return render(request, 'explorer.html', data.explorer);
```

### data.py
```python
explorer = {
    'title': 'Explorer page',
    'intro': 'Hello world'
}
```

### urls.py
```python
urlpatterns = [
    path('explorer/', views.explorer),
]
```
