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

var FaDribbble = function (_React$Component) {
    _inherits(FaDribbble, _React$Component);

    function FaDribbble() {
        _classCallCheck(this, FaDribbble);

        return _possibleConstructorReturn(this, (FaDribbble.__proto__ || Object.getPrototypeOf(FaDribbble)).apply(this, arguments));
    }

    _createClass(FaDribbble, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 33.5q-1-5.4-3.2-11.1h0l-0.1 0q-0.3 0.1-0.9 0.4t-2.3 1-3 1.9-3 2.5-2.3 3.3l-0.3-0.2q4.1 3.3 9.3 3.3 3 0 5.8-1.1z m-4.2-13.6q-0.4-1.1-1.2-2.4-6.9 2-15 2 0 0.2 0 0.5 0 2.8 1 5.3t2.8 4.5q1.1-2 2.7-3.7t3.2-2.8 2.9-1.8 2.2-1.1l0.9-0.3q0 0 0.2-0.1t0.3-0.1z m-2.4-4.7q-2.6-4.8-5.4-8.4-3.1 1.4-5.2 4.1t-2.9 6.1q6.8 0 13.5-1.8z m15.3 7.1q-4.7-1.3-9.1-0.6 1.9 5.3 2.8 10.4 2.5-1.6 4.2-4.2t2.1-5.6z m-18-16.5q0 0 0 0 0 0 0 0z m13.2 3.2q-4.1-3.6-9.7-3.6-1.7 0-3.4 0.4 2.9 3.8 5.5 8.5 1.5-0.6 2.9-1.3t2.1-1.4 1.5-1.3 0.8-0.9z m5 10.8q-0.1-5.1-3.3-9.1l-0.1 0q-0.2 0.3-0.4 0.6t-1 1-1.5 1.3-2.3 1.5-2.9 1.4q0.6 1.2 1 2.1 0 0.1 0.1 0.4t0.2 0.4q0.8-0.1 1.6-0.2t1.7 0 1.5 0 1.5 0.1 1.2 0.1 1.1 0.2 0.8 0.1 0.6 0.1z m2.5 0.2q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
                )
            );
        }
    }]);

    return FaDribbble;
}(React.Component);

exports.default = FaDribbble;
module.exports = exports['default'];