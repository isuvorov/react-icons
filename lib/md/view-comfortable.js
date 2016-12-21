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

var MdViewComfortable = function (_React$Component) {
    _inherits(MdViewComfortable, _React$Component);

    function MdViewComfortable() {
        _classCallCheck(this, MdViewComfortable);

        return _possibleConstructorReturn(this, (MdViewComfortable.__proto__ || Object.getPrototypeOf(MdViewComfortable)).apply(this, arguments));
    }

    _createClass(MdViewComfortable, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 8.4h6.6v6.6h-6.6v-6.6z m0 23.2v-6.6h6.6v6.6h-6.6z m-8.4 0v-6.6h6.8v6.6h-6.8z m-8.2 0v-6.6h6.6v6.6h-6.6z m-8.4 0v-6.6h6.6v6.6h-6.6z m25-8.2v-6.8h6.6v6.8h-6.6z m-8.4-15h6.8v6.6h-6.8v-6.6z m-8.2 6.6v-6.6h6.6v6.6h-6.6z m8.2 8.4v-6.8h6.8v6.8h-6.8z m-8.2 0v-6.8h6.6v6.8h-6.6z m-8.4 0v-6.8h6.6v6.8h-6.6z m0-8.4v-6.6h6.6v6.6h-6.6z' })
                )
            );
        }
    }]);

    return MdViewComfortable;
}(React.Component);

exports.default = MdViewComfortable;
module.exports = exports['default'];