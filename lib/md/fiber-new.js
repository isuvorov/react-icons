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

var MdFiberNew = function (_React$Component) {
    _inherits(MdFiberNew, _React$Component);

    function MdFiberNew() {
        _classCallCheck(this, MdFiberNew);

        return _possibleConstructorReturn(this, (MdFiberNew.__proto__ || Object.getPrototypeOf(MdFiberNew)).apply(this, arguments));
    }

    _createClass(MdFiberNew, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 23.4v-8.4h-2v7.5h-1.9v-5.9h-2.1v5.9h-1.8v-7.5h-2.2v8.4c0 0.9 0.8 1.6 1.8 1.6h6.6c0.9 0 1.6-0.7 1.6-1.6z m-11.6-6.3v-2.1h-6.6v10h6.6v-2.1h-4.1v-1.8h4.1v-2.1h-4.1v-1.9h4.1z m-8.4 7.9v-10h-2v5.9l-4.2-5.9h-2v10h2v-5.9l4.3 5.9h1.9z m19.3-18.4c1.8 0 3.2 1.5 3.2 3.4v20c0 1.9-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.5-3.2-3.4v-20c0-1.9 1.4-3.4 3.2-3.4h26.8z' })
                )
            );
        }
    }]);

    return MdFiberNew;
}(React.Component);

exports.default = MdFiberNew;
module.exports = exports['default'];