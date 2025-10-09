# State of CAQDAS 2025

In the following we describe the methods and steps that lead
to the final results, located in the [results folder](./results).

## Collecting QDA Software

**Output:** [./results/results-unfiltered.csv](./results/results-unfiltered.csv)

We manually collected data from various platforms and stored the results in csv files.
The data is located in the [data folder](./data).

We used only platforms as sources for data collection that enable anonymous and login-free access to the data.
More platforms may be added for future evaluations. 
Feel free to [suggest platforms](../CONTRIBUTING.md).

## Filtering Results

**Output:** [./results/filtering.csv](./results/filtering.csv)

After data collection we filtered the data and kept only those entries,
that were considered **available** (not abandoned, websites online),
**relevant** (directly related or designed for qualitative data analysis) 
and **complete** (domain-independent and covering a full qda workflow).

## Data Collection 

**Output:** [./results/final-overview.csv](./results/final-overview.csv)

Data was only inquired by manually examining publicly available
and canonical information from "official" sources.
These include for example:

- official user manuals
- README files
- FAQs section
- official website information
- GitHub / GitLab repository
- software publications by the software authors

> We do not rely on secondary information, such as Wikipedia or other
software databases for this step, because they might contain wrong or outdated information.

We examined the final software specifically for the following information:
- release, license, costs
- platform support (client and/or server), server location, on-premise hosting
- supported formats, import, export, REFI support
- plugin and script support
- collaboration support
- AI integration and support
- security policy
- contributors (if open source)

## Counting Formats

**Output:** [./results/format-counts.csv](./results/formats-counts.csv)

For counting formats we implemented a script, which is also available under `tools`.


