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

var FaCheckSquareO = function (_React$Component) {
    _inherits(FaCheckSquareO, _React$Component);

    function FaCheckSquareO() {
        _classCallCheck(this, FaCheckSquareO);

        return _possibleConstructorReturn(this, (FaCheckSquareO.__proto__ || Object.getPrototypeOf(FaCheckSquareO)).apply(this, arguments));
    }

    _createClass(FaCheckSquareO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.9 20.8v7.1q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.2 0.2-0.5 0.2-0.1 0-0.2-0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-5.7q0-0.3 0.2-0.5l1.4-1.4q0.2-0.3 0.5-0.3 0.1 0 0.3 0.1 0.4 0.2 0.4 0.7z m5.2-11l-18.2 18.2q-0.5 0.6-1.3 0.6t-1.2-0.6l-9.6-9.6q-0.6-0.5-0.6-1.3t0.6-1.2l2.4-2.5q0.6-0.5 1.3-0.5t1.3 0.5l5.8 5.9 14.5-14.5q0.5-0.5 1.3-0.5t1.2 0.5l2.5 2.5q0.5 0.5 0.5 1.3t-0.5 1.2z' })
                )
            );
        }
    }]);

    return FaCheckSquareO;
}(React.Component);

exports.default = FaCheckSquareO;
module.exports = exports['default'];