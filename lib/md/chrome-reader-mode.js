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

var MdChromeReaderMode = function (_React$Component) {
    _inherits(MdChromeReaderMode, _React$Component);

    function MdChromeReaderMode() {
        _classCallCheck(this, MdChromeReaderMode);

        return _possibleConstructorReturn(this, (MdChromeReaderMode.__proto__ || Object.getPrototypeOf(MdChromeReaderMode)).apply(this, arguments));
    }

    _createClass(MdChromeReaderMode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 31.6v-21.6h-15v21.6h15z m0-25q1.3 0 2.3 1.1t1.1 2.3v21.6q0 1.4-1.1 2.4t-2.3 1h-30q-1.3 0-2.3-1t-1.1-2.4v-21.6q0-1.3 1.1-2.3t2.3-1.1h30z m-13.4 17.5h11.8v2.5h-11.8v-2.5z m0-8.2h11.8v2.5h-11.8v-2.5z m0 4.1h11.8v2.5h-11.8v-2.5z' })
                )
            );
        }
    }]);

    return MdChromeReaderMode;
}(React.Component);

exports.default = MdChromeReaderMode;
module.exports = exports['default'];