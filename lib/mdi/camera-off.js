'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiCameraOff = function (_React$Component) {
    _inherits(MdiCameraOff, _React$Component);

    function MdiCameraOff() {
        _classCallCheck(this, MdiCameraOff);

        return _possibleConstructorReturn(this, (MdiCameraOff.__proto__ || Object.getPrototypeOf(MdiCameraOff)).apply(this, arguments));
    }

    _createClass(MdiCameraOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1.2,4.46849L 2.47711,3.20001L 20,20.7229L 18.7315,22L 16.7315,20L 4,20C 2.89543,20 2,19.1046 2,18L 2,6.00002C 2,5.77982 2.03558,5.56794 2.10131,5.3698L 1.2,4.46849 Z M 7,4L 9,2.00001L 15,2.00001L 17,4L 20,4.00002C 21.1045,4.00002 22,4.89545 22,6.00002L 22,18C 22,18.5974 21.738,19.1336 21.3228,19.5001L 16.328,14.5053C 16.7553,13.7687 17,12.9129 17,12C 17,9.23858 14.7614,7 12,7C 11.0871,7 10.2313,7.24467 9.49468,7.672L 5.8227,4.00001L 7,4 Z M 7,12C 7,14.7614 9.23857,17 12,17C 12.5233,17 13.0279,16.9196 13.502,16.7705L 11.7185,14.987C 10.2863,14.8537 9.14631,13.7137 9.01303,12.2815L 7.22952,10.498C 7.0804,10.9721 7,11.4767 7,12 Z M 12,9.00001C 13.6568,9.00001 15,10.3432 15,12C 15,12.3525 14.9392,12.6907 14.8276,13.0049L 10.9951,9.17244C 11.3093,9.06079 11.6475,9.00001 12,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiCameraOff;
}(React.Component);

exports.default = MdiCameraOff;
module.exports = exports['default'];