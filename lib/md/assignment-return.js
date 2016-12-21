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

var MdAssignmentReturn = function (_React$Component) {
    _inherits(MdAssignmentReturn, _React$Component);

    function MdAssignmentReturn() {
        _classCallCheck(this, MdAssignmentReturn);

        return _possibleConstructorReturn(this, (MdAssignmentReturn.__proto__ || Object.getPrototypeOf(MdAssignmentReturn)).apply(this, arguments));
    }

    _createClass(MdAssignmentReturn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 25v-6.6h-6.6v-5l-8.4 8.2 8.4 8.4v-5h6.6z m-6.6-20c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.8 1.6 1.8 1.6-0.8 1.6-1.8-0.7-1.6-1.6-1.6z m11.6 0c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h6.9c0.7-2 2.5-3.4 4.7-3.4s4 1.4 4.7 3.4h6.9z' })
                )
            );
        }
    }]);

    return MdAssignmentReturn;
}(React.Component);

exports.default = MdAssignmentReturn;
module.exports = exports['default'];