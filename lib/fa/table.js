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

var FaTable = function (_React$Component) {
    _inherits(FaTable, _React$Component);

    function FaTable() {
        _classCallCheck(this, FaTable);

        return _possibleConstructorReturn(this, (FaTable.__proto__ || Object.getPrototypeOf(FaTable)).apply(this, arguments));
    }

    _createClass(FaTable, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.9 30.7v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.5z m0-8.6v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.6z m11.5 8.6v-4.3q0-0.3-0.2-0.5t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.5z m-11.5-17.1v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.5z m11.5 8.5v-4.2q0-0.4-0.2-0.6t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.6z m11.4 8.6v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m-11.4-17.1v-4.3q0-0.3-0.2-0.5t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.5z m11.4 8.5v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.6z m0-8.5v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m2.8-7.2v24.3q0 1.5-1 2.5t-2.5 1.1h-30q-1.5 0-2.5-1.1t-1.1-2.5v-24.3q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z' })
                )
            );
        }
    }]);

    return FaTable;
}(React.Component);

exports.default = FaTable;
module.exports = exports['default'];