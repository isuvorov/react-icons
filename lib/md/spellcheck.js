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

var MdSpellcheck = function (_React$Component) {
    _inherits(MdSpellcheck, _React$Component);

    function MdSpellcheck() {
        _classCallCheck(this, MdSpellcheck);

        return _possibleConstructorReturn(this, (MdSpellcheck.__proto__ || Object.getPrototypeOf(MdSpellcheck)).apply(this, arguments));
    }

    _createClass(MdSpellcheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36 19.3l2.4 2.3-15.9 15.9-8.4-8.5 2.3-2.4 6.1 6.2z m-25.3-0.9h6.9l-3.5-9.3z m10.1 8.2l-2-5h-9.3l-1.9 5h-3.5l8.5-21.6h3.1l8.5 21.6h-3.4z' })
                )
            );
        }
    }]);

    return MdSpellcheck;
}(React.Component);

exports.default = MdSpellcheck;
module.exports = exports['default'];