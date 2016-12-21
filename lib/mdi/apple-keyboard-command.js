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

var MdiAppleKeyboardCommand = function (_React$Component) {
    _inherits(MdiAppleKeyboardCommand, _React$Component);

    function MdiAppleKeyboardCommand() {
        _classCallCheck(this, MdiAppleKeyboardCommand);

        return _possibleConstructorReturn(this, (MdiAppleKeyboardCommand.__proto__ || Object.getPrototypeOf(MdiAppleKeyboardCommand)).apply(this, arguments));
    }

    _createClass(MdiAppleKeyboardCommand, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 6,2C 8.20914,2 10,3.79086 10,6L 10,8L 14,8L 14,6C 14,3.79086 15.7909,2.00001 18,2.00001C 20.2091,2.00001 22,3.79086 22,6C 22,8.20914 20.2091,10 18,10L 16,10L 16,14L 18,14C 20.2091,14 22,15.7909 22,18C 22,20.2091 20.2091,22 18,22C 15.7909,22 14,20.2091 14,18L 14,16L 10,16L 10,18C 10,20.2091 8.20914,22 6,22C 3.79086,22 2,20.2091 2,18C 2,15.7909 3.79086,14 6,14L 8,14L 8,10L 6,10C 3.79086,10 2,8.20914 2,6C 2,3.79086 3.79086,2 6,2 Z M 16,18C 16,19.1046 16.8954,20 18,20C 19.1046,20 20,19.1046 20,18C 20,16.8954 19.1046,16 18,16L 16,16L 16,18 Z M 14,10L 10,10L 10,14L 14,14L 14,10 Z M 6,16C 4.89543,16 4,16.8954 4,18C 4,19.1046 4.89543,20 6,20C 7.10457,20 8,19.1046 8,18L 8,16L 6,16 Z M 8,6.00001C 8,4.89544 7.10457,4.00001 6,4.00001C 4.89543,4.00001 4,4.89544 4,6.00001C 4,7.10458 4.89543,8.00001 6,8.00001L 8,8.00001L 8,6.00001 Z M 18,8C 19.1046,8 20,7.10458 20,6.00001C 20,4.89544 19.1046,4.00001 18,4.00001C 16.8954,4.00001 16,4.89544 16,6.00001L 16,8L 18,8 Z ' })
                )
            );
        }
    }]);

    return MdiAppleKeyboardCommand;
}(React.Component);

exports.default = MdiAppleKeyboardCommand;
module.exports = exports['default'];