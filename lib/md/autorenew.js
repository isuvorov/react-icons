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

var MdAutorenew = function (_React$Component) {
    _inherits(MdAutorenew, _React$Component);

    function MdAutorenew() {
        _classCallCheck(this, MdAutorenew);

        return _possibleConstructorReturn(this, (MdAutorenew.__proto__ || Object.getPrototypeOf(MdAutorenew)).apply(this, arguments));
    }

    _createClass(MdAutorenew, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.3 12.9c1.3 2 2.1 4.5 2.1 7.1 0 7.3-6.1 13.4-13.4 13.4v5l-6.6-6.8 6.6-6.6v5c5.5 0 10-4.4 10-10 0-1.7-0.5-3.3-1.2-4.7z m-11.3-2.9c-5.5 0-10 4.5-10 10 0 1.7 0.4 3.3 1.2 4.7l-2.4 2.4c-1.4-2-2.2-4.5-2.2-7.1 0-7.3 6.1-13.4 13.4-13.4v-5l6.6 6.8-6.6 6.6v-5z' })
                )
            );
        }
    }]);

    return MdAutorenew;
}(React.Component);

exports.default = MdAutorenew;
module.exports = exports['default'];