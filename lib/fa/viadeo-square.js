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

var FaViadeoSquare = function (_React$Component) {
    _inherits(FaViadeoSquare, _React$Component);

    function FaViadeoSquare() {
        _classCallCheck(this, FaViadeoSquare);

        return _possibleConstructorReturn(this, (FaViadeoSquare.__proto__ || Object.getPrototypeOf(FaViadeoSquare)).apply(this, arguments));
    }

    _createClass(FaViadeoSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.4 23.2q0-1.7-0.6-3.2-0.9 0.5-1.9 0.7 0.5 1.1 0.5 2.6 0 2.6-1.7 4.4t-4.3 1.8-4.3-1.8-1.8-4.4q0-2.6 1.8-4.5t4.3-1.9q1.2 0 2.2 0.4 0.1-0.9 0.6-1.9-1.4-0.5-2.8-0.5-3.5 0-5.8 2.5t-2.3 5.8 2.3 5.9 5.8 2.3 5.7-2.3 2.3-5.9z m-3.9-7.9q0 0.5 0 1.6 0 1.4-0.1 2.7t-0.5 3-0.9 2.9-1.5 2.4-2.2 1.5q0.4 0.1 0.9 0.1h0.2q4.9-3.1 4.9-9.2 0-2.6-0.8-5z m0 0q-0.1-1.8-1-3.8t-2.2-2.9q2 3.5 3.2 6.7z m7.4-2.3q0-2.3-1.1-3.9-0.9 1.9-2.8 2.4-1.5 0.4-2.4 1.2t-0.9 2.2q0 0.9 0.5 1.8 1.7-0.4 3.2-1.5t2.1-2.6q-0.1 1.1-1.6 2.5t-3.1 2.2q1.1 1.1 2.4 1.1 1.2 0 2-0.8t1.4-2q0.3-1 0.3-2.6z m7.4-3.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaViadeoSquare;
}(React.Component);

exports.default = FaViadeoSquare;
module.exports = exports['default'];