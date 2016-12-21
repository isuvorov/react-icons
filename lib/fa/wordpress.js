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

var FaWordpress = function (_React$Component) {
    _inherits(FaWordpress, _React$Component);

    function FaWordpress() {
        _classCallCheck(this, FaWordpress);

        return _possibleConstructorReturn(this, (FaWordpress.__proto__ || Object.getPrototypeOf(FaWordpress)).apply(this, arguments));
    }

    _createClass(FaWordpress, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm2.8 20q0-3.6 1.5-7l8.2 22.4q-4.4-2.1-7-6.2t-2.7-9.2z m28.8-0.9q0 0.5-0.1 0.9t-0.2 1.1-0.3 1-0.3 1.3-0.4 1.3l-1.7 5.7-6.2-18.4q1-0.1 1.9-0.2 0.5-0.1 0.6-0.4t0-0.7-0.7-0.3l-4.6 0.2q-1.6 0-4.5-0.2-0.2 0-0.4 0.1t-0.3 0.3 0 0.4 0.2 0.4 0.4 0.2l1.8 0.2 2.7 7.3-3.8 11.2-6.2-18.5q1-0.1 2-0.2 0.4-0.1 0.5-0.4t0-0.7-0.7-0.3l-4.5 0.2q-0.2 0-0.6 0t-0.5 0q2.3-3.6 6.1-5.7t8.2-2.1q3.3 0 6.3 1.2t5.3 3.3h-0.2q-1.3 0-2.1 0.9t-0.8 2.2q0 0.2 0 0.5t0.1 0.5 0.2 0.5 0.2 0.5 0.3 0.5 0.2 0.4 0.4 0.6 0.3 0.5q1.4 2.4 1.4 4.7z m-11.3 2.4l5.3 14.4q0 0.2 0.1 0.3-2.8 1-5.7 1-2.5 0-4.8-0.7z m14.7-9.7q2.2 3.8 2.2 8.2 0 4.7-2.4 8.6t-6.2 6.2l5.3-15.1q1.3-3.8 1.3-6.2 0-0.9-0.2-1.7z m-15-11.8q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z m0 39.1q3.9 0 7.4-1.5t6.1-4.1 4.1-6.1 1.5-7.4-1.5-7.4-4.1-6.1-6.1-4.1-7.4-1.5-7.4 1.5-6.1 4.1-4.1 6.1-1.5 7.4 1.5 7.4 4.1 6.1 6.1 4.1 7.4 1.5z' })
                )
            );
        }
    }]);

    return FaWordpress;
}(React.Component);

exports.default = FaWordpress;
module.exports = exports['default'];