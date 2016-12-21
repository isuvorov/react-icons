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

var MdMap = function (_React$Component) {
    _inherits(MdMap, _React$Component);

    function MdMap() {
        _classCallCheck(this, MdMap);

        return _possibleConstructorReturn(this, (MdMap.__proto__ || Object.getPrototypeOf(MdMap)).apply(this, arguments));
    }

    _createClass(MdMap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 31.6v-19.7l-10-3.5v19.7z m9.1-26.6c0.5 0 0.9 0.4 0.9 0.9v25.1c0 0.4-0.3 0.7-0.6 0.8l-9.4 3.2-10-3.5-8.9 3.4-0.2 0.1c-0.5 0-0.9-0.4-0.9-0.9v-25.1c0-0.4 0.3-0.7 0.6-0.8l9.4-3.2 10 3.5 8.9-3.4z' })
                )
            );
        }
    }]);

    return MdMap;
}(React.Component);

exports.default = MdMap;
module.exports = exports['default'];