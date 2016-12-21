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

var MdInput = function (_React$Component) {
    _inherits(MdInput, _React$Component);

    function MdInput() {
        _classCallCheck(this, MdInput);

        return _possibleConstructorReturn(this, (MdInput.__proto__ || Object.getPrototypeOf(MdInput)).apply(this, arguments));
    }

    _createClass(MdInput, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.4 26.6v-5h-16.8v-3.2h16.8v-5l6.6 6.6z m16.6-21.6c1.8 0 3.4 1.5 3.4 3.4v23.3c0 1.8-1.6 3.3-3.4 3.3h-30c-1.8 0-3.4-1.5-3.4-3.3v-6.7h3.4v6.7h30v-23.4h-30v6.7h-3.4v-6.6c0-1.8 1.6-3.4 3.4-3.4h30z' })
                )
            );
        }
    }]);

    return MdInput;
}(React.Component);

exports.default = MdInput;
module.exports = exports['default'];