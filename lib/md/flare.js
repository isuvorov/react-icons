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

var MdFlare = function (_React$Component) {
    _inherits(MdFlare, _React$Component);

    function MdFlare() {
        _classCallCheck(this, MdFlare);

        return _possibleConstructorReturn(this, (MdFlare.__proto__ || Object.getPrototypeOf(MdFlare)).apply(this, arguments));
    }

    _createClass(MdFlare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.4 38.4v-10h3.2v10h-3.2z m-9-10.1l3.6-3.6 2.3 2.3-3.6 3.6z m15.3-1.3l2.3-2.3 3.6 3.6-2.3 2.3z m-4.7-12c2.7 0 5 2.3 5 5s-2.3 5-5 5-5-2.3-5-5 2.3-5 5-5z m8.4 3.4h10v3.2h-10v-3.2z m2.2-6.7l-3.6 3.6-2.3-2.3 3.6-3.6z m-9-10.1v10h-3.2v-10h3.2z m-6.3 11.4l-2.3 2.3-3.6-3.6 2.3-2.3z m-3.7 5.4v3.2h-10v-3.2h10z' })
                )
            );
        }
    }]);

    return MdFlare;
}(React.Component);

exports.default = MdFlare;
module.exports = exports['default'];