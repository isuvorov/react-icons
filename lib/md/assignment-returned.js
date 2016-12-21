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

var MdAssignmentReturned = function (_React$Component) {
    _inherits(MdAssignmentReturned, _React$Component);

    function MdAssignmentReturned() {
        _classCallCheck(this, MdAssignmentReturned);

        return _possibleConstructorReturn(this, (MdAssignmentReturned.__proto__ || Object.getPrototypeOf(MdAssignmentReturned)).apply(this, arguments));
    }

    _createClass(MdAssignmentReturned, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 30l8.4-8.4h-5v-6.6h-6.8v6.6h-5z m0-25c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.8 1.6 1.8 1.6-0.8 1.6-1.8-0.7-1.6-1.6-1.6z m11.6 0c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h6.9c0.7-2 2.5-3.4 4.7-3.4s4 1.4 4.7 3.4h6.9z' })
                )
            );
        }
    }]);

    return MdAssignmentReturned;
}(React.Component);

exports.default = MdAssignmentReturned;
module.exports = exports['default'];