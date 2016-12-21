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

var MdWbIridescent = function (_React$Component) {
    _inherits(MdWbIridescent, _React$Component);

    function MdWbIridescent() {
        _classCallCheck(this, MdWbIridescent);

        return _possibleConstructorReturn(this, (MdWbIridescent.__proto__ || Object.getPrototypeOf(MdWbIridescent)).apply(this, arguments));
    }

    _createClass(MdWbIridescent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.3 33.3l-2.4-2.4 3-3 2.4 2.3z m-2.4-25.9l2.4-2.3 3 2.9-2.4 2.4z m28.2 23.5l-2.4 2.4-2.9-3.1 2.3-2.3z m-12.5 6.5h-3.2v-4.9h3.2v4.9z m10.1-32.3l2.4 2.3-3 3-2.3-2.3z m-13.3-4.2h3.2v5h-3.2v-5z m-10 23.2v-10h23.2v10h-23.2z' })
                )
            );
        }
    }]);

    return MdWbIridescent;
}(React.Component);

exports.default = MdWbIridescent;
module.exports = exports['default'];