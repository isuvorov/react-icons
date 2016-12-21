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

var FaDownload = function (_React$Component) {
    _inherits(FaDownload, _React$Component);

    function FaDownload() {
        _classCallCheck(this, FaDownload);

        return _possibleConstructorReturn(this, (FaDownload.__proto__ || Object.getPrototypeOf(FaDownload)).apply(this, arguments));
    }

    _createClass(FaDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.1 30q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m5.7 0q0-0.6-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.4 1-0.4 0.4-1z m2.8-5v7.1q0 0.9-0.6 1.6t-1.5 0.6h-32.9q-0.8 0-1.5-0.6t-0.6-1.6v-7.1q0-0.9 0.6-1.5t1.5-0.6h10.4l3 3q1.3 1.2 3.1 1.2t3-1.2l3-3h10.4q0.9 0 1.5 0.6t0.6 1.5z m-7.2-12.7q0.4 0.9-0.3 1.6l-10 10q-0.4 0.4-1 0.4t-1-0.4l-10-10q-0.7-0.7-0.3-1.6 0.3-0.9 1.3-0.9h5.7v-10q0-0.6 0.4-1t1-0.4h5.7q0.6 0 1 0.4t0.5 1v10h5.7q0.9 0 1.3 0.9z' })
                )
            );
        }
    }]);

    return FaDownload;
}(React.Component);

exports.default = FaDownload;
module.exports = exports['default'];