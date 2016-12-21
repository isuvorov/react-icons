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

var MdExtension = function (_React$Component) {
    _inherits(MdExtension, _React$Component);

    function MdExtension() {
        _classCallCheck(this, MdExtension);

        return _possibleConstructorReturn(this, (MdExtension.__proto__ || Object.getPrototypeOf(MdExtension)).apply(this, arguments));
    }

    _createClass(MdExtension, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 18.4c2.3 0 4.3 1.8 4.3 4.1s-2 4.1-4.3 4.1h-2.5v6.8c0 1.8-1.4 3.2-3.2 3.2h-6.4v-2.5c0-2.5-2-4.4-4.5-4.4s-4.5 1.9-4.5 4.4v2.5h-6.4c-1.8 0-3.2-1.4-3.2-3.2v-6.4h2.5c2.5 0 4.4-2 4.4-4.5s-1.9-4.5-4.4-4.5h-2.5v-6.4c0-1.8 1.4-3.2 3.2-3.2h6.8v-2.5c0-2.3 1.8-4.3 4.1-4.3s4.1 2 4.1 4.3v2.5h6.8c1.8 0 3.2 1.4 3.2 3.2v6.8h2.5z' })
                )
            );
        }
    }]);

    return MdExtension;
}(React.Component);

exports.default = MdExtension;
module.exports = exports['default'];