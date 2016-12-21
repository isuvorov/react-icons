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

var FaBold = function (_React$Component) {
    _inherits(FaBold, _React$Component);

    function FaBold() {
        _classCallCheck(this, FaBold);

        return _possibleConstructorReturn(this, (FaBold.__proto__ || Object.getPrototypeOf(FaBold)).apply(this, arguments));
    }

    _createClass(FaBold, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.9 34q1.6 0.7 3.1 0.7 8.4 0 8.4-7.5 0-2.6-0.9-4-0.6-1-1.4-1.7t-1.5-1-1.8-0.6-1.9-0.2-2.1-0.1q-1.6 0-2.2 0.3 0 1.1 0 3.5t0 3.5q0 0.2-0.1 1.5t0 2.2 0.1 1.9 0.3 1.5z m-0.3-16.7q0.9 0.2 2.4 0.2 1.8 0 3.2-0.3t2.5-1 1.6-2 0.6-3.2q0-1.6-0.7-2.7t-1.7-1.9-2.4-0.9-2.8-0.3q-1.1 0-2.9 0.2 0 1.2 0.1 3.4t0.1 3.4q0 0.6 0 1.8t0 1.8q0 1 0 1.5z m-12.1 19.8l0-2.1q0.4 0 1.9-0.3t2.4-0.6q0.2-0.3 0.3-0.6t0.2-0.8 0.1-0.7 0.1-0.8 0-0.8v-1.5q0-21.9-0.5-22.8-0.1-0.2-0.5-0.4t-1-0.2-1.1-0.2-1.1-0.1-0.7 0l-0.1-1.9q2.2 0 7.6-0.2t8.4-0.2q0.5 0 1.5 0t1.5 0q1.6 0 3 0.3t2.9 0.9 2.4 1.6 1.7 2.3 0.6 3.1q0 1.2-0.4 2.1t-0.8 1.6-1.5 1.3-1.6 1-1.9 0.9q3.5 0.8 5.7 3t2.3 5.5q0 2.3-0.8 4t-2 3-3.1 1.9-3.7 1.1-3.9 0.3q-1 0-2.9-0.1t-3-0.1q-2.4 0-6.8 0.3t-5.2 0.2z' })
                )
            );
        }
    }]);

    return FaBold;
}(React.Component);

exports.default = FaBold;
module.exports = exports['default'];