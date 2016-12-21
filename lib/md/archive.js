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

var MdArchive = function (_React$Component) {
    _inherits(MdArchive, _React$Component);

    function MdArchive() {
        _classCallCheck(this, MdArchive);

        return _possibleConstructorReturn(this, (MdArchive.__proto__ || Object.getPrototypeOf(MdArchive)).apply(this, arguments));
    }

    _createClass(MdArchive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.5 8.4h23l-1.6-1.8h-20z m11.5 20.7l9.1-9.1h-5.7v-3.4h-6.8v3.4h-5.7z m14.2-20.3c0.5 0.5 0.8 1.3 0.8 2.1v20.7c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-20.7c0-0.8 0.3-1.6 0.8-2.1l2.2-2.9c0.5-0.5 1.2-0.9 2-0.9h20c0.8 0 1.5 0.4 2 0.9z' })
                )
            );
        }
    }]);

    return MdArchive;
}(React.Component);

exports.default = MdArchive;
module.exports = exports['default'];