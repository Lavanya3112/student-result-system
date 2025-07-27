from flask import Flask, render_template, request
import csv

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    name = request.form['name']
    math = int(request.form['math'])
    sci = int(request.form['science'])
    eng = int(request.form['english'])
    marathi = int(request.form['marathi'])
    hindi = int(request.form['hindi'])
    social = int(request.form['social'])

    total = math + sci + eng + marathi + hindi + social
    percentage = total / 6

    # Grade logic
    if percentage >= 90:
        grade = 'A'
    elif percentage >= 75:
        grade = 'B'
    elif percentage >= 60:
        grade = 'C'
    else:
        grade = 'D'

    # Remark logic
    if all(mark >= 40 for mark in [math, sci, eng, marathi, hindi, social]):
        remark = "Passed and Promoted"
    else:
        remark = "Failed and Withheld"

    # Save to CSV
    with open('results.csv', 'a', newline='') as f:
        writer = csv.writer(f)
        writer.writerow([name, math, sci, eng, marathi, hindi, social, total, percentage, grade, remark])

    return render_template(
        'result.html',
        name=name,
        total=total,
        percent=round(percentage, 2),
        grade=grade,
        math=math,
        sci=sci,
        eng=eng,
        marathi=marathi,
        hindi=hindi,
        social=social,
        remark=remark
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

