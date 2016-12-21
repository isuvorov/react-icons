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

var MdWbSunny = function (_React$Component) {
    _inherits(MdWbSunny, _React$Component);

    function MdWbSunny() {
        _classCallCheck(this, MdWbSunny);

        return _possibleConstructorReturn(this, (MdWbSunny.__proto__ || Object.getPrototypeOf(MdWbSunny)).apply(this, arguments));
    }

    _createClass(MdWbSunny, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.9 30.9l3-3 2.4 2.3-3 3.1z m12.5 6.5v-4.9h3.2v4.9h-3.2z m1.6-28.3c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.4-10-10 4.5-10 10-10z m13.4 8.4h5v3.4h-5v-3.4z m-4.6 12.7l2.3-2.2 3 2.9-2.4 2.4z m5.3-22.8l-3 3-2.3-2.3 2.9-3z m-12.5-6.5v5h-3.2v-5h3.2z m-15 16.6v3.4h-5v-3.4h5z m4.7-9.5l-2.4 2.4-3-3 2.4-2.3z' })
                )
            );
        }
    }]);

    return MdWbSunny;
}(React.Component);

exports.default = MdWbSunny;
module.exports = exports['default'];