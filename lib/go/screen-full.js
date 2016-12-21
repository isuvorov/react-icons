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

var GoScreenFull = function (_React$Component) {
    _inherits(GoScreenFull, _React$Component);

    function GoScreenFull() {
        _classCallCheck(this, GoScreenFull);

        return _possibleConstructorReturn(this, (GoScreenFull.__proto__ || Object.getPrototypeOf(GoScreenFull)).apply(this, arguments));
    }

    _createClass(GoScreenFull, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.5 30h25v-20h-25v20z m5-15h15v10h-15v-10z m-7.5-7.5h7.5v-2.5h-10v10h2.5v-7.5z m0 17.5h-2.5v10h10v-2.5h-7.5v-7.5z m22.5-20v2.5h7.5v7.5h2.5v-10h-10z m7.5 27.5h-7.5v2.5h10v-10h-2.5v7.5z' })
                )
            );
        }
    }]);

    return GoScreenFull;
}(React.Component);

exports.default = GoScreenFull;
module.exports = exports['default'];