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

var MdLocalConvenienceStore = function (_React$Component) {
    _inherits(MdLocalConvenienceStore, _React$Component);

    function MdLocalConvenienceStore() {
        _classCallCheck(this, MdLocalConvenienceStore);

        return _possibleConstructorReturn(this, (MdLocalConvenienceStore.__proto__ || Object.getPrototypeOf(MdLocalConvenienceStore)).apply(this, arguments));
    }

    _createClass(MdLocalConvenienceStore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 20v-8.4h-1.6v3.4h-1.6v-3.4h-1.8v5h3.4v3.4h1.6z m-8.2-3.4v-5h-5v1.8h3.2v1.6h-3.2v5h5v-1.6h-3.4v-1.8h3.4z m13.2-5h5v21.8h-13.2v-6.8h-6.8v6.8h-13.2v-21.8h5v-5h23.2v5z' })
                )
            );
        }
    }]);

    return MdLocalConvenienceStore;
}(React.Component);

exports.default = MdLocalConvenienceStore;
module.exports = exports['default'];